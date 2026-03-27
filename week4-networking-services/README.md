# Kubernetes Networking & Services

## Challenges

### Challenge 1 — Internal Service (ClusterIP)

```bash
kubectl apply -f backend-deployment.yaml
kubectl apply -f backend-service.yaml

kubectl get pods
kubectl get svc
```

Test connectivity from another Pod:

```bash
kubectl run test-pod --image=busybox -it --rm -- sh
wget -qO- http://backend-service:5000
```

---

### Challenge 2 — External Access

#### Option 1 — Port Forward

```bash
kubectl port-forward service/backend-service 5000:5000
```

Access:

```bash
http://localhost:5000
```

#### Option 2 — NodePort

```bash
kubectl apply -f backend-service.yaml
kubectl get svc
```

Access:

```bash
http://<node-ip>:<nodePort>
```

---

### Challenge 3 — Multi-Service Architecture

```bash
kubectl apply -f backend-deployment.yaml
kubectl apply -f backend-service.yaml

kubectl apply -f frontend-deployment.yaml
kubectl apply -f frontend-service.yaml

kubectl get pods
kubectl get svc
```

Frontend calls backend using DNS:

```bash
http://backend-service:5000
```

---

### Challenge 4 — Networking Failure

Break and debug connectivity:

```bash
kubectl get pods
kubectl get svc
kubectl describe svc backend-service
kubectl logs <pod-name>
```

Test inside Pod:

```bash
kubectl exec -it <pod-name> -- sh
wget -qO- http://backend-service:5000
```

Fix common issues:

* Wrong selector
* Wrong port
* Wrong service name (DNS)

---

## Result

* Services provide stable access to Pods
* ClusterIP enables internal communication
* NodePort/port-forward expose applications externally
* Frontend communicates with backend via DNS
* Networking issues can be debugged using kubectl commands


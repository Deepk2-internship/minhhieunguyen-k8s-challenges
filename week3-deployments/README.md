# Kubernetes Deployments & Scaling

## Challenges

### Challenge 1 — Convert Pod to Deployment

```bash
kubectl apply -f deployment.yaml
kubectl get deployments
kubectl get rs
kubectl get pods
```

---

### Challenge 2 — Scaling

```bash
kubectl scale deployment flask-deployment --replicas=1
kubectl scale deployment flask-deployment --replicas=5
kubectl scale deployment flask-deployment --replicas=10
kubectl get pods -w
```

---

### Challenge 3 — Rolling Update

```bash
kubectl set image deployment/flask-deployment flask-container=flask-app:v2
kubectl rollout status deployment/flask-deployment
kubectl get pods -w
```

---

### Challenge 4 — Broken Deployment

```bash
kubectl set image deployment/flask-deployment flask-container=flask-app:broken
kubectl get pods
kubectl describe pod <pod-name>
kubectl rollout undo deployment/flask-deployment
```

---

## Result

* Deployment automatically manages Pods
* Scaling works correctly
* Rolling update ensures zero downtime
* Rollback restores the system when failures occur

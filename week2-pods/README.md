# Kubernetes Pods

## Run

```bash
kind create cluster --name week2-cluster
kubectl apply -f pod.yaml
kubectl get pods
```

---

## Challenges

### Challenge 1 — Setup Cluster

* Installed kubectl, Kind
* Created local Kubernetes cluster
* Verified node with:

  * kubectl get nodes

---

### Challenge 2 — Run Pod

* Created Pod YAML
* Deployed container from Docker Hub
* Used:

  * kubectl apply
  * kubectl logs
  * kubectl exec

---

### Challenge 3 — Debug

* Created broken Pod (wrong image / port)
* Investigated errors:

  * ErrImagePull
  * ImagePullBackOff
* Used:

  * kubectl describe
  * kubectl logs

---

### Challenge 4 — Multiple Pods

* Created 3 Pods manually
* Observed scheduling and IPs
* Used:

  * kubectl get pods -o wide

---

## Result

* Pods deployed successfully
* Able to inspect and debug Pods
* Understood Pod lifecycle
* Interacted with containers via kubectl
# Flask Docker App

## Run

```bash
docker build -t flask-app:v1 .
docker run -d -p 5000:5000 flask-app:v1
```

Access: http://localhost:5000

---

## Challenges

### Challenge 1 — Containerize

* Created Dockerfile
* Built image
* Ran container successfully

### Challenge 2 — Debug

* Fixed wrong port mapping
* Fixed missing dependency (requirements.txt)
* Fixed incorrect CMD
* Used:

  * docker logs
  * docker ps
  * docker exec

### Challenge 3 — Optimize

* Used `python:3.12-slim`
* Added `.dockerignore`
* Reduced image size

### Challenge 4 — Push Image

```bash
docker login
docker tag flask-app yourusername/flask-app
docker push yourusername/flask-app
```

---

## Docker Hub

https://hub.docker.com/repository/docker/fbminhhieu/flask-app/

---

## Result

* Container runs successfully
* Image pushed to Docker Hub
* Debug issues resolved

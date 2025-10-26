![AWS](https://img.shields.io/badge/AWS-EKS-orange)
![Docker](https://img.shields.io/badge/Docker-Enabled-blue)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Active-326ce5)
![React](https://img.shields.io/badge/Frontend-React.js-61dafb)

?? Architecture Diagram
![Architecture Diagram](Architecture%20Diagram.png)


🎥 **Watch Full Demo on YouTube →** [https://youtu.be/Xrqn_y9fgzo?si=6zq4Ddagqnwcu9aK](https://youtu.be/Xrqn_y9fgzo?si=6zq4Ddagqnwcu9aK)

# 🌐 Portfolio App – Full Stack Deployment on AWS EKS

This project demonstrates a **real-world DevOps workflow** for deploying a **Full Stack Portfolio Application** (React Frontend + Python Flask Backend) using **Amazon EKS (Elastic Kubernetes Service)**.

It’s designed to show how a modern application can be deployed on AWS using **Kubernetes, Docker, and CI/CD**, with scalability and automation in mind.

---

## 🚀 Project Overview

### 🧩 Components
| Layer | Technology | Description |
|-------|-------------|--------------|
| **Frontend** | React.js | A modern, responsive portfolio website. |
| **Backend** | Python Flask | Handles form submissions, APIs, and dynamic routes. |
| **Containerization** | Docker | Packages both frontend and backend for deployment. |
| **Orchestration** | Amazon EKS (Kubernetes) | Manages containerized workloads. |
| **Compute** | EC2 (t3.small) | Node instance type for running pods. |
| **Networking** | NodePort Service | Exposes the app via EC2 Public IP and NodePort. |

---

## ⚙️ Architecture Diagram

Below is the visual overview of the project architecture:

![Architecture Diagram](A_flowchart-style_architecture_diagram_illustrates.png)

---

## 🏗️ Deployment Flow

| Step | Task | Description |
|------|------|--------------|
| **1** | Build Docker Images | Built and tagged images for both frontend and backend. |
| **2** | Push to ECR | Uploaded images to AWS Elastic Container Registry. |
| **3** | Configure EKS Cluster | Created an EKS cluster and connected it via `kubectl`. |
| **4** | Deploy Backend & Frontend | Applied Kubernetes manifests for each service. |
| **5** | Expose Services | Used `NodePort` for external access via EC2 public IP. |

---

## 🧠 Understanding NodePort Access

Since this project uses **NodePort**, you can access your application using:

Example: http://3.91.45.112:30080


> 💡 Note: LoadBalancer wasn’t used to minimize AWS costs.

---

## 🛠️ Kubernetes Objects

| Resource Type | Name | Purpose |
|----------------|------|----------|
| Namespace | `portfolio-app` | Isolates the app resources. |
| Deployment | `frontend` / `backend` | Manages pods and replicas. |
| Service | `frontend-service` / `backend-service` | Handles internal & external networking. |

---

## 📦 YAML Files

Each component is defined in declarative YAML manifests:

├── k8s/
│ ├── namespace.yaml
│ ├── backend-deployment.yaml
│ ├── backend-service.yaml
│ ├── frontend-deployment.yaml
│ └── frontend-service.yaml


---

## 🧩 Example Output

Once deployed successfully:

kubectl get pods -n portfolio-app

NAME READY STATUS RESTARTS AGE
backend-57b8dbf7c8-8kvsw 1/1 Running 0 30s
frontend-55c9fc8686-hb56l 1/1 Running 0 22s
kubectl get svc -n portfolio-app

NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
backend-service ClusterIP 10.100.38.162 <none> 5000/TCP 4m
frontend-service NodePort 10.100.89.105 <none> 80:30080/TCP 4m


---

## 💡 Highlights

- ✅ Full-stack app containerized with Docker  
- ✅ Deployed using AWS EKS (Kubernetes)  
- ✅ Works via NodePort using EC2 Public IP  
- ✅ Cost-efficient setup (no LoadBalancer)  
- ✅ Real-world CI/CD-style Kubernetes workflow  

---

## 📚 Future Enhancements

- Add CI/CD pipeline using **GitHub Actions**  
- Introduce **Ingress + ALB** for domain-based routing  
- Automate EKS provisioning with **Terraform**

---

> 🌱 *This project is built for learning, demonstration, and skill-building in DevOps and AWS ecosystem.*



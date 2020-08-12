"spec": {
    "containers": [{ 
        "image": "noctarius/hazelcast-openshift:latest",
        "name": "hazelcast-openshift",
        "env": [{ 
            "name": "HAZELCAST_KUBERNETES_SERVICE_DNS", 
            "value": "${SERVICE_NAME}.${NAMESPACE}.svc.${KUBERNETES_SERVICE_DOMAIN}" 
         }, { 
             "name": "HAZELCAST_KUBERNETES_SERVICE_NAME", 
             "value": "${SERVICE_NAME}"
         }, { 
             "name": "HAZELCAST_KUBERNETES_NAMESPACE", 
             "value": "${NAMESPACE}" 
         }, { 
             "name": "HAZELCAST_KUBERNETES_SERVICE_DNS_IP_TYPE", 
             "value": "IPV4" 
         }, { 
             "name": "HAZELCAST_TYPE", 
             "value": "${HAZELCAST_TYPE}"
         }], 
             "ports": [{ 
                 "containerPort": 5701, 
                 "protocol": "TCP"
         }] 
    }] 
    }
docker build -t roster90/intinitywar-landing-page . 


docker buildx build --platform linux/amd64,linux/arm64 -t roster90/intinitywar-landing-page:0.1.0 --push .


docker push roster90/intinitywar-landing-page:0.1.0
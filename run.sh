docker build -t metafi/intinitywar-landing-page . 


docker buildx build --platform linux/amd64,linux/arm64 -t metafi/intinitywar-landing-page:0.1.0 --push .


docker push metafi/intinitywar-landing-page:0.1.0
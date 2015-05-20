# Deis Api App

An example application to be used with the [deis deployer](https://github.com/sedouard/deis-deployer) example.

## Building & Pusung the Image

To build this image `cd` to the root of this repo and:

```
docker build -t <your dockerhub user name>/simple-node:latest .
docker push <your dockerhub user name>/simple-node:latest
```

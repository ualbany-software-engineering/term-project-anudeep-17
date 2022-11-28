echo "pulling"
git pull

echo "building app"
docker-compose up -d --build

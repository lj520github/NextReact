import { createClient } from 'redis'

const client = await createClient({
    url: "redis://192.168.0.128:6379",
    username: "default",
    password: "lj2023",
});
client.on('error', err => console.log('Redis Client Error', err));

if (!client.isOpen) {
    console.log("connetcion...");
    client.connect();
}

export { client }
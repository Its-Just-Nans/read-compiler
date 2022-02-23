# read-compiler

A online README Compiler

New online version and API

```sh
To call the API :

const SERVER_URL = "https://readme-compiler.vercel.app";

const myMarkdown = "Hello World";

const run = async () => {
    const res = await fetch(`${SERVER_URL}/api/`, {
        method: "POST",
        body : myMarkdown
    });
}
run();
```
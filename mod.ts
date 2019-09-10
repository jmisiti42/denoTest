// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.

import { serve } from "https://deno.land/std@v0.12/http/server.ts";

const port = 8000;
const s = serve(`:${port}`);

window.onload = async () => {
  console.log(`Server started : http://localhost:${port}/`);

  for await (const req of s) {
    const { url } = req;
    let body: Uint8Array;

    switch (url) {
      case '/goodbye':
        body = new TextEncoder().encode("Good Bye World\n");
        break;
      default:
        body = new TextEncoder().encode("Hello World\n");
        break;
    }
    req.respond({ body });
  }
};
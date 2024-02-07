const maxItems = 1000;
const LIMIT = 2;

/**
 *
 * @param offset
 */
async function foo(offset: number): Promise<Response> {
  console.log(`foo(${offset})`);

  if (maxItems > offset) {
    return new Response(JSON.stringify([offset]));
  }
  return new Response(JSON.stringify([]));
}

/**
 *
 */
async function* yiel() {
  let offset = 0;

  while (maxItems > offset) {
    yield foo(offset)
      .then(async (res) => res.json() as Promise<number[]>)
      .then(async (data) =>
        "status" in data || data.length === 0 ? undefined : data,
      );

    offset += LIMIT;
  }
}

for await (const items of yiel()) {
  console.log(items);
}

export async function fetchData(
  endPoint: string,
  { body, headers }: { body?: object; headers?: object }
) {
  const defHeaders = { "content-type": "application/json" };

  const config = {
    method: body ? "POST" : "GET",
    headers: {
      ...defHeaders,
      ...headers,
    },
  };

  if (body) {
    Object.defineProperty(config, "body", {
      value: JSON.stringify(body),
    });
  }

  console.log(config);

  let data = null;
  try {
    const response = await fetch(endPoint, config);
    data = await response.json();
    if (response.ok) {
      return {
        status: response.status,
        data,
        headers: response.headers,
        url: response.url,
      };
    }
    throw new Error(response.statusText);
  } catch (error) {
    return Promise.reject(error ? error : data);
  }
}

fetchData.get = async (endPoint: string, headers?: object) => {
  return fetchData(endPoint, { headers });
};

fetchData.post = async (
  endPoint: string,
  { body, headers }: { body: object; headers?: object }
) => {
  return fetchData(endPoint, { body, headers });
};

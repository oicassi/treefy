const handler = async (_, res) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  console.log('opa opa:', data);
  res.status(200).json({ data });
};

export default handler;

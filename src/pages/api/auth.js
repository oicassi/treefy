const coisa = process.env.TEST;

const handler = (req, res) => {
  console.log(req.query);
  res.status(200).json({ text: coisa });
};

export default handler;

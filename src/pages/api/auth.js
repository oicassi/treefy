const coisa = process.env.TEST;

const handler = (req, res) => {
  const { code, state } = req.query;
  const { state: storedState } = req.cookies
  if (!code || !state || !storedState || storedState !== state) {
    console.log("ERRO:", {code, state, storedState})
    res.redirect(308, '/')
  }
  res.redirect(308, '/')
};

export default handler;

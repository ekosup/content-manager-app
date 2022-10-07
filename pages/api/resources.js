
export default async function (req, res) {
  if (req.method === "GET") {
    const resData = await fetch("http://localhost:3001/api/resources");
    const data = await resData.json();

    return res.send(data);
  }

  if (req.method === "POST") {
    const { title, description, link, priority, timeToFinish } = req.body;
    if (!title || !description || !timeToFinish || !priority || !link) {
      return res.status(422).send("Data are missing!");
    }

    return res.send("Data has been received!");
  }
}
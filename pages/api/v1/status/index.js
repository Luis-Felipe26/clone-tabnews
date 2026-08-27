function status(request, response) {
  response.status(200).json({ chave: "é massa véi" });
}

export default status;

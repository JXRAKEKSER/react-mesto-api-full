class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }

  sendError(res) {
    return res.status(this.statusCode).json({ message: this.message });
  }
}

module.exports = NotFoundError;

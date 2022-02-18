class ConflictingRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 409;
    this.name = 'ConflictingRequestError';
  }

  sendError(res) {
    return res.status(this.statusCode).json({ message: this.message });
  }
}

module.exports = ConflictingRequestError;

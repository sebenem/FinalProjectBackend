const adminOnly = (req, res, next) => {
  if (req.userRole !== 'admin') {
    return res.status(403).json({ message: 'Siz admin deyilsiniz' });
  }
  next();
};

export default adminOnly;

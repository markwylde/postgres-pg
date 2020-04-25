function getAll (connection, sql, parameters, callback) {
  if (arguments.length === 3) {
    callback = parameters;
    parameters = null;
  }

  if (!parameters) {
    parameters = [];
  }

  connection.query(sql, parameters, callback);
}

module.exports = getAll;

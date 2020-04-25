function getOne (connection, sql, parameters, callback) {
  if (arguments.length === 3) {
    callback = parameters;
    parameters = null;
  }

  if (!parameters) {
    parameters = [];
  }

  connection.query({
    text: sql,
    parameters
  }, function (error, result) {
    if (error) {
      return callback(error);
    }

    callback(null, result.rows[0]);
  });
}

module.exports = getOne;

const users = [];
let userId = 0;

class UserController {
  async index(req, res) {
    return res.json(users);
  }

  async show(req, res) {
    const { id } = req.params;
    const user = users.find((userData) => userData.id === Number(id));

    if (!user) {
      return res.status(404).json({
        error: {
          message: 'Usuário não encontrado',
        },
      });
    }

    return res.json(user);
  }

  async store(req, res) {
    const { name, age } = req.body;

    const user = { name, age, id: userId };
    users.push(user);
    userId += 1;

    return res.json(user);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name = '', age = null } = req.body;
    const user = users.find((userData) => userData.id === Number(id));

    if (!user) {
      return res.status(404).json({
        error: {
          message: 'Usuário não encontrado',
        },
      });
    }

    user.name = name || user.name;
    user.age = age || user.age;

    return res.json(user);
  }

  async delete(req, res) {
    const { id } = req.params;
    const index = users.findIndex((userData) => userData.id === Number(id));

    if (index === -1) {
      return res.status(404).json({
        error: {
          message: 'Usuário não encontrado',
        },
      });
    }

    users.splice(index, 1);

    return res.status(204).json();
  }
}

module.exports = new UserController();

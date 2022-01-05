// import Model Student
const Student = require("../models/Student");

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    const success = {
      message: "Menampilkkan semua students",
      data: students,
    };

    res.json(success);
  }

  async store(req, res) {
    /**
     *
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
     */

    const students = await Student.create(req.body);

    const success = {
      message: "Menambahkan data student",
      data: students,
    };

    res.json(success);
  }

  async show(req, res) {
    const { id } = req.params;

    // cari student berdasarkan id
    const student = await Student.find(id);

    if (student) {
      const success = {
        message: `Menampilkan detail students`,
        data: student,
      };

      res.status(200).json(success);
    }

    // else
    const fail = {
      message: `Student dengan id ${id} not found`,
    };

    res.status(404).json(fail);
  }

  async update(req, res) {
    const { id } = req.params;

    // cari id student yang ingin di update
    const student = await Student.find(id);

    if (student) {
      // melakukan update data
      const student = await Student.update(id, req.body);
      const success = {
        message: `Mengedit student id ${id}`,
        data: student,
      };

      res.status(200).json(success);
    }

    // else
    const fail = {
      message: `Student dengan id ${id} not found`,
    };

    res.status(404).json(fail);
  }

  async destroy(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      // melakukan delete data
      await Student.delete(id);
      const success = {
        message: `Menghapus student id ${id}`,
      };

      res.status(200).json(success);
    }

    // else
    const fail = {
      message: `Student dengan id ${id} not found`,
    };

    res.status(404).json(fail);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;

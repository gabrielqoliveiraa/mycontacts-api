const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoryRepository.findAll();
    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;
    const category = await CategoryRepository.findById(id);
    if (!category) {
      return response.status(404).json({ error: 'Category not found' });
    }
    return response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;
    if (!name) {
      return response.status(400).json({ error: 'Missing required fields' });
    }
    const category = await CategoryRepository.findByName(name);
    if (category) {
      return response.status(404).json({ error: 'Category already exists' });
    }
    const contact = await CategoryRepository.create({ name });
    return response.json(contact);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      name,
    } = request.body;
    const category = await CategoryRepository.findById(id);
    if (!category) {
      return response.status(404).json({ error: 'Category not found' });
    }
    const categoryUpdated = await CategoryRepository.update(id, {
      name,
    });
    return response.json(categoryUpdated);
  }

  async delete(request, response) {
    const { id } = request.params;
    const contact = await CategoryRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }
    const deletedContact = await CategoryRepository.deleteById(id);
    return response.json(deletedContact);
  }
}

module.exports = new CategoryController();

const ContactRepository = require('../repositories/ContactRepository');
const CategoryRepository = require('../repositories/CategoryRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }
    return response.json(contact);
  }

  async store(request, response) {
    const {
      name, email, phone, category_id,
    } = request.body;
    if (!name || !email || !phone) {
      return response.status(400).json({ error: 'Missing required fields' });
    }
    const contactAlreadyExists = await ContactRepository.findByEmail(email);
    if (contactAlreadyExists) {
      return response.status(404).json({ error: 'Contact already exists' });
    }
    const category = await CategoryRepository.findById(category_id);
    if (!category) {
      return response.status(404).json({ error: 'Category not found' });
    }
    const contact = await ContactRepository.create({
      name, email, phone, categoryId: category._id,
    });
    return response.json(contact);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      name, email, phone, categoryId,
    } = request.body;
    const contactAlreadyExists = await ContactRepository.findById(id);
    if (!contactAlreadyExists) {
      return response.status(404).json({ error: 'Contact not found' });
    }
    const contactUpdated = await ContactRepository.update(id, {
      name, email, phone, categoryId,
    });
    return response.json(contactUpdated);
  }

  async delete(request, response) {
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }
    const deletedContact = await ContactRepository.deleteById(id);
    return response.json(deletedContact);
  }
}

module.exports = new ContactController();

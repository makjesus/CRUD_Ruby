document.addEventListener('DOMContentLoaded', () => {
    // Evento para criação de item
    const createForm = document.querySelector('#create-form');
    if (createForm) {
      createForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);
  
        fetch('/items', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          alert('Item criado com sucesso!');
          // Atualize a página ou manipule o DOM para mostrar o novo item
          console.log(data);
        })
        .catch(error => {
          console.error('Erro na criação:', error);
        });
      });
    }
  
    // Evento para edição de item
    const editForms = document.querySelectorAll('.edit-form');
    editForms.forEach(form => {
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const itemId = this.dataset.id; // Supondo que o id do item está armazenado no dataset
  
        fetch(`/items/${itemId}`, {
          method: 'PATCH',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          alert('Item atualizado com sucesso!');
          // Atualize a página ou manipule o DOM para mostrar a atualização
          console.log(data);
        })
        .catch(error => {
          console.error('Erro na atualização:', error);
        });
      });
    });
  
    // Evento para deletar item
    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        const itemId = this.dataset.id;
  
        fetch(`/items/${itemId}`, {
          method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
          alert('Item deletado com sucesso!');
          // Atualize a página ou remova o item do DOM
          console.log(data);
        })
        .catch(error => {
          console.error('Erro na exclusão:', error);
        });
      });
    });
  });
  
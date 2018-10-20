import React from "react";
import moment from "moment";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.task ? props.task.description : "",
      status: props.task ? props.task.status : "",
      priority: props.task ? props.task.priority : 1,
      createdAt: props.task ? moment(props.task.createdAt) : moment(),
      note: props.task ? props.task.note : "",
      error: ""
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onStatusChange = e => {
    const status = e.target.value;
    this.setState(() => ({ status }));
  };

  onPriorityChange = e => {
    const priority = e.target.value;
    const regex = /^(?:[1-9]|0[1-9]|10)$/;
    if (!priority || priority.match(regex)) {
      this.setState(() => ({ priority }));
    }
  };

  onFormSubmit = e => {
    e.preventDefault();
    // console.log("submitted!");
    if (!this.state.description || !this.state.status) {
      this.setState(() => ({
        error: "Пожалуйста заполните Название и выберите Статус задачи!"
      }));
    } else {
      // console.log("submitted");
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        status: this.state.status,
        createdAt: this.state.createdAt.valueOf(),
        priority: parseFloat(this.state.priority, 10),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onFormSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <p className="input-label">Введите название/Краткое описание задачи</p>
        <input
          className="input-text"
          type="text"
          placeholder="Название задачи"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <p className="input-label">Выбрать статус</p>
        <select
          className="input-select"
          value={this.state.status}
          onChange={this.onStatusChange}
        >
          <option value="">Статус не выбран</option>
          <option value="Планирование">Планирование</option>
          <option value="В процессе">В процессе</option>
          <option value="Выполнено">Выполнено</option>
        </select>
        <p className="input-label">Приоритет по шкале от 1 до 10</p>
        <input
          className="input-text"
          type="number"
          placeholder="Приоритет"
          value={this.state.priority}
          onChange={this.onPriorityChange}
        />
        <p className="input-label">Подробное описание задачи(Опционально)</p>
        <textarea
          className="input-textarea"
          placeholder="Подробное описание задачи"
          value={this.state.note}
          onChange={this.onNoteChange}
        />
        <div>
          <button className="button">Сохранить задачу</button>
        </div>
      </form>
    );
  }
}

export default TaskForm;

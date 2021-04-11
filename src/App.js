import './App.css';
import React from 'react';
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username    : 'duynguyen',
            password    : '123456',
            description : '',
            slbGender   : 0,
            rdLanguage  : 'en',
            ckbStatus   : true,
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }
    onHandleChange(event){
        let nameInput   = event.target.name;
        let valueInput  = (event.target.type === "checkbox") ? event.target.checked  : event.target.value;
        this.setState({
            [nameInput] : valueInput,
        });
    }

    onHandleSubmit(event){
        event.preventDefault();
        console.log(this.state);
        this.setState({
            username    : this.state.username,
            password    : this.state.password,
            description : this.state.description,
            slbGender   : this.state.slbGender,
            rdLanguage   : this.state.rdLanguage,
        });
    }
    render() {
        return (
            <div className="container">
            <div className="row">
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Đăng ký</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={ this.onHandleSubmit }>
                            <div className="form-group">
                                <label>Tên đăng nhập : </label>
                                <input 
                                    type="text" 
                                    name="username" 
                                    className="form-control" 
                                    onChange={ this.onHandleChange }
                                    value={this.state.username}
                                />
                            </div>
                            <div className="form-group">
                                <label>Mật khẩu : </label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    className="form-control" 
                                    onChange={ this.onHandleChange }
                                    value={this.state.password}
                                />
                            </div>
                            <div className="form-group">
                                <label>Mô tả : </label>
                                <textarea 
                                    name="description" 
                                    className="form-control" 
                                    rows="3" 
                                    onChange={ this.onHandleChange }
                                >
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label>Giới tính : </label>
                                <select 
                                    className="form-control" 
                                    name="slbGender"
                                    onChange={ this.onHandleChange }
                                    value={this.state.slbGender}
                                >
                                    <option value="0">Nữ</option>
                                    <option value="1">Nam</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Ngôn ngữ : </label>
                                <div className="radio">
                                    <label>
                                        <input 
                                            type="radio" 
                                            name="rdLanguage" 
                                            value="en"
                                            onChange={this.onHandleChange}
                                            checked={this.state.rdLanguage === 'en'}
                                        />
                                        Tiếng Anh
                                    </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input 
                                            type="radio" 
                                            name="rdLanguage" 
                                            value="vi"
                                            onChange={this.onHandleChange}
                                            checked={this.state.rdLanguage === 'vi'}
                                        />
                                        Tiếng Việt
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Trạng thái : </label>
                                <div className="checkbox">
                                    <label>
                                        <input 
                                            type="checkbox" 
                                            name="ckbStatus"
                                            onChange={ this.onHandleChange }
                                            value={true}
                                            checked = {this.state.ckbStatus === true}
                                        />
                                        Kích hoạt
                                    </label>
                                </div>
                                
                               
                            </div>
                            <button type="submit" className="btn btn-primary">Lưu</button>&nbsp;&nbsp;
                            <button type="reset" className="btn btn-info">Xóa trắng</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

export default App;

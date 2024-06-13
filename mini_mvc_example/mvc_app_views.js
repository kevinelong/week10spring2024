
class UserView extends View {
    render(userModel){
        return `# ${userModel.data.id} - <b>${userModel.data.last}, ${userModel.data.first} </b>`;
    }
}

# CALCULATRONZ

A WEB calculator, but all calculations are done on server side.

## Links

* [Webpage](https://calculatronz.herokuapp.com/) hosted on Heroku.

### Technologies

* React js
* Node js

### Application logic

Let's consider how the application works. Let's distinguish 3 stages: user action, server operation and server response.

##### Numbers, algebra, delete

When you a button is clicked, suppose button 1, the code is executed:
```sh
onClick={(e) => this.request1('btn', e.target.value, e.target.id)}
```
Where value is button value (i.e 1) and id is button code.
```sh
request1(url, vl, id) {
    // checkes if buttons not disabled
    if (!this.state.load) {
        // disables buttons
        this.setState({ load: true });

        fetch("/" + url +"?eq=" + this.state.eq + "&vl=" + vl + "&ch=" + this.state.ch + "&id=" + id)
    }
 }
```

When the request reaches server, the server according to current input code determines which result to send in the response.
```sh
// ch - input field code
// id - pressed button code
if(ch.substr(0, 1) === '9' && (id === '0' || id === '4')) {
    eq = '';
    ch = '8'
} else {
    ch = 8 + ch.substr(1, ch.length-1);
}
```

When the responce reaches client, the return is written to state:
```sh
 fetch("/" + url +"?eq=" + this.state.eq + "&vl=" + vl + "&ch=" + this.state.ch + "&id=" + id)
.then(response => response.json())
.then(data => this.setState({ eq: data.val, ch: data.nch, load: false }));
```

##### ToDo: Memory

### ToDo

* Add memory logic to backend
* Create new design

## License

MIT
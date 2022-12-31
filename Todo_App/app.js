const { WebComponent } = window

class TodoApp extends WebComponent {
    app = {
        title: "Todo New App",
    }

    template = `<h1>
    {app.title}
    </h1>`
}

TodoApp.register()
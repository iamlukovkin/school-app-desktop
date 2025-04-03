# Desktop application for [School information panel](https://github.com/users/iamlukovkin/projects/14/views/1)

This application created for executing webapps and launching that on desktops.

# Using for other applications

You can edit required site in [file](./src/main/java/ru/school/schoolbrowser/WebController.java)

```java
private void loadPage() {
        engine.load("http://127.0.0.1:3000");
}
```

# Installation

Firstly, you must to install all required dependencies.

```bash
mvn install
```

# Build

```bash
mvn compile
```

# Startup

```bash
java -jar target/SchoolBrowser-1.0-SNAPSHOT.jar
```



# Bearded Pattern Library
The Bearded pattern library is a set of reusable design and development guidelines intended to standardize our development process. It's built on the static site generator [Middleman](https://middlemanapp.com/).

## Getting Started
These instructions will get you a copy of the pattern library up and running on your local machine. See the [Deployment](#deployment) section for notes on how to deploy the project on a live server.

### Prerequisites
This project assumes you have [npm](https://nodejs.org/en/) and [Grunt](http://gruntjs.com/) installed globally on your machine. For instructions on how to install them, visit their respective sites' documentation.

You'll also need to install the Middleman and Bundler ruby gems so you can access their commands in your terminal. On a Mac, Ruby is installed by default. On Windows, you'll need to install it by downloading [RubyInstaller](https://rubyinstaller.org/).

To install Middleman, run in your terminal:

```
gem install middleman
```

To install Bundler, run:

```
gem install bundler
```

### Installation
Once Middleman is installed, clone this repo into the folder of your choosing, for example `~/Development/pattern-library`. From that directory in your terminal, you can install the project dependencies.

1. Install gem dependencies in the Gemfile: `bundle install`
3. Install npm packages: `npm install`

### Run locally
Once you've installed the dependencies, you can start the localhost server. Run:

```
middleman server
```

After that you should be up and running! You can view the site in your browser at [localhost:4567](http://localhost:4567)

## Deployment
Middleman needs to build static files from the source to serve to a live site. You can do this by running in the project folder:

```
middleman build
```

You might want to check out the config.rb file for build options as well. There are some default parameters included for deployment, like minifying the CSS and Javascript, but you can change them to suit your needs.

## Contributing
Feel free to open an issue or submit a pull request! Before contributing, you should look over the [Code of Conduct](CODE_OF_CONDUCT.md) for this project.

## License
This project is licensed under the MIT License — see [LICENSE.md](LICENSE.md) for details.

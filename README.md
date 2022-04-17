# Goal

The goal of the exercise is to create a simple checkout system that fulfills the criteria listed below:

1. Products can be added to a basket
2. Products can be removed from a basket
3. Baskets can be visited, and show a total calculated price
4. Customer’s email, address and credit card details are required to check out
5. Customers end up with an Order after checking out that contains all the basket items
6. Products should at least have a name and a price
7. Products can be bought more than once
8. Products have limited inventory / quantity available
9. You can expect the checkout system to be in use by up to 5,000 users concurrently

# Deliverables
- All UI should be built in React. You'll need to setup React on your own. You can include React in the same project using a gem (preferred as it’s easier to review) or you could use a mono repo approach.
- Create a database that can support the criteria
- Create pages to accommodate functionality
- Add tests to validate the intended functionality
- Brief written summary of approach, assumptions, caveats and notes
- The boilerplate repo uses rails' default test framework, but feel free to use rspec if desired.

### Local Development Setup

#### Prerequisites:
##### General Software Requirements
- Install the latest [Node.js](https://nodejs.org) version. Make sure that [npm](https://www.npmjs.com/) is installed with it as well.
- Install [yarn](https://yarnpkg.com/en/docs/install)
- Install [Ruby version 2.7.2](https://www.ruby-lang.org/en/news/2019/10/01/ruby-2-6-5-released/)
- Install [Postgres](https://postgresapp.com)
- Install [Redis](https://redis.io/download)
- Install [ImageMagick](https://imagemagick.org/script/download.php)

##### Installation steps on mac OS
- Install [Homebrew](https://brew.sh).
- Install the latest [Node.js](https://nodejs.org) version. Make sure that [npm](https://www.npmjs.com/) is installed with it as well.
- Install [RVM](https://rvm.io/rvm/install)
- Install Ruby 2.7.2 using RVM
  ```
  rvm install 2.7.2
  ```

  To make 2.7.2 as default and current version execute
  ```
  rvm --default use 2.7.2
  ```
- Install PostgreSQL using Homebrew.
   ```
   brew install postgresql
   ```

   Once postgresql is installed to start the server daemon run
   ```
   brew services start postgresql
   ```
- Install Redis
  ```
  brew install redis
  ```

  Launch Redis server daemon through Homebrew
  ```
  brew services start redis
  ```

  To ensure server is up, ping the server and confirm that we get a response.
  ```
  redis-cli ping
  PONG
  ```
- Install Yarn
  ```
  brew install yarn
  ```
- Install ImageMagick
  ```
  brew install imagemagick vips
  ```

  We are using [image_processing](https://github.com/janko/image_processing) gem for file uploads.
  Need to install this so that images are rendered locally.

#### Bundle Install and Setup DB
```
bundle install
bundle exec rake setup
```

#### Execute yarn
```
bin/yarn
```

#### Spinning up the App
```
foreman start
```

#### Login as Admin in the app
* visit http://localhost:3000
* login as admin, user name: `jane@example.com`, password: `welcome`


### Replace Plate with your project name

Let's say that the project name is `Bottle`. Execute the command below to
replace all occurrences of `Plate` with `Bottle`.

```
perl -e "s/Plate/Bottle/g;" -pi $(find . -type f)
```

If you get "argument list too long: perl", you can try alternate xargs approach::

```
find . -type f -print0 | xargs -0 perl -e 's/Plate/Bottle/g;' -pi
```

Feel free to adjust config and database files from plate to bottle if you wish to.


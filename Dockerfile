FROM ruby:2.3.0

ENV RACK_ENV production

RUN curl -sL https://deb.nodesource.com/setup | bash -
RUN apt-get install -y nodejs

RUN gem install bundler --no-ri --no-rdoc

ENV APP_DIR /app
RUN mkdir $APP_DIR
WORKDIR $APP_DIR

ADD Gemfile* $APP_DIR/
RUN bundle install --without development --deployment

ADD . $APP_DIR

RUN rake assets:precompile

EXPOSE 4567

CMD bundle exec thin start --port 4567 --environment $RACK_ENV

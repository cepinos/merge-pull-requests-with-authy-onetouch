var commands = require('./commands');

module.exports = {
  save: function(pr){
    var command = 'curl "http://api.authy.com/onetouch/json/users/' + process.env.AUTHY_USER_ID + '/approval_requests" \
                    -d api_key="' + process.env.AUTHY_API_KEY + '" \
                    -d message="Pull Request - ' + pr.pull_request.base.repo.name + '" \
                    -d details[title]="' + pr.pull_request.title + '" \
                    -d details[body]="' + pr.pull_request.body + '" \
                    -d details[username]="' + pr.pull_request.user.login + '" \
                    -d details[head]="' + pr.pull_request.head.label + '" \
                    -d details[base]="' + pr.pull_request.base.label + '" \
                    -d seconds_to_expire=0';

    return commands.run(command);
  }
};
import './app.styl';

export let AppDirective = () => {
  return {
    template: require('./app.html')
  }
};
/*
export class AppController {
  constructor($scope, Posts) {
  	Posts.getPosts();
    $scope.prop = 1;
    setTimeout(() => { $scope.prop = 2 }, 5000);
  }
}*/

export class PostsController {
	
	constructor($scope, Posts) {
		this.$scope = $scope;
		this.Posts = Posts;
		this.$scope.posts = Posts.getPosts();
		this.$scope.name = '';

		this.$scope.addPost = this.addPost.bind(this);
		this.$scope.deletePost = this.deletePost.bind(this);

		this.$scope.$watch('posts', () => console.log(this.$scope.posts));
	}

	addPost() {
		if (this.$scope.name.length == 0) return;
		this.$scope.posts = this.Posts.addPost(this.$scope.name);
		this.$scope.name = '';
	}

	deletePost(id) {
		console.log('deleting posts');
		this.$scope.posts = this.Posts.deletePost(id);
	}


}

 


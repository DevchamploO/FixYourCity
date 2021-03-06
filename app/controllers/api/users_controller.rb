class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      error = @user.errors.full_messages
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :home_zipcode, :description)
  end

end

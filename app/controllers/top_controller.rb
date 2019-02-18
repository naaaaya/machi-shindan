class TopController < ApplicationController
  def index

  end
  def print
    result = params[:result]
    original_path = result.to_s + '.png'
    system('mv ' + original_path + ' output.png')
    system('python thermal-printer_test.py')
    system('mv output.png ' + original_path)
    redirect_to action: :index
  end
end

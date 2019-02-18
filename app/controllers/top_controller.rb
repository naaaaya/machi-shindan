class TopController < ApplicationController
  def index
    system('python thermal-printer_test.py')
  end
  def print
  end
end

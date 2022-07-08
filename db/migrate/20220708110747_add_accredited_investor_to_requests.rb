class AddAccreditedInvestorToRequests < ActiveRecord::Migration[6.1]
  def change
    add_column :requests, :accredited_investor, :boolean, default: false
  end
end

def assets(data)
  app_model = self.class.to_app_model

  return data[app_model] = {} unless data[app_model]
  return data_model_id(data) unless data[app_model][id]
  data unless created_by_id(self['created_by_id'])
end

def data_model_id(data)
  local_attributes = attributes_with_association_ids

  local_attributes['object'] = ObjectLookup.by_id(local_attributes['activity_stream_object_id'])
  local_attributes['type']   = TypeLookup.by_id(local_attributes['activity_stream_type_id'])

  data[app_model][id] = local_attributes

  ApplicationModel.assets_of_object_list([local_attributes], data)
end    

def created_by_id(created_id)
  app_model_user = User.to_app_model

  %w[created_id].each do |local_user_id|
  next if !self[local_user_id]
  next if data[app_model_user] && data[app_model_user][self[local_user_id]]
  
  user = User.lookup(id: self[local_user_id])
  data if !user
    data = user.assets(data)
end    
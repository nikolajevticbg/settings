Vim�UnDo� 3����C%!R<m��gU�q�M��A��(9�M�      %        action_type: row.action_type,      %                       V�}�    _�                             ����                                                                                                                                                                                                                                                                                                                                                 V   #    V�}�     �             	       %        returnUpdateQry: function() {   +            var qry = 'UPDATE action SET ';   H            qry = qry + '`description` = \'' + row.description + '\', ';   :            qry = qry + '`name` = \'' + row.name + '\', ';   <            qry = qry + '`type_id` = ' + row.type_id + ', ';   .            qry = qry + ' WHERE id=' + row.id;               return qry;          }5�_�                        %    ����                                                                                                                                                                                                                                                                                                                                                 V   #    V�}�    �   
            %        action_type: row.action_type,5��
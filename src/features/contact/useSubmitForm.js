import { useMutation, useQueryClient } from '@tanstack/react-query';
import { insertLead as insertLeadApi } from '../../services/apiLeads';

export function useSubmitForm() {
  const { isPending: isInsertingLead, mutate: insertLead } = useMutation({
    mutationFn: insertLeadApi,
  });

  return { isInsertingLead, insertLead };
}

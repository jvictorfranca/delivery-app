import { getBackEndRequest } from '../../../utils/requests';

const getSellerNameWithId = async (sellerId) => {
  const allSellers = await getBackEndRequest('/users/sellers');
  const seller = allSellers.find((currSeller) => currSeller.id === sellerId);
  return seller.name;
};

export default getSellerNameWithId;

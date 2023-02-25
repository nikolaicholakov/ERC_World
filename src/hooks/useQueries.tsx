import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { IExploreNftCard, ITrendingCollectionsSwiperCard } from "types";

const axiosInstance = axios.create({});

// GET QURIEST

const useExploreCollections = (startIndex: number, lastIndex: number) => {
  return useQuery<IExploreNftCard[], AxiosError>({
    queryKey: ["exploreCollections", startIndex, lastIndex],
    queryFn: async () => {
      const { data } = await axios.get(
        `/api/collections/explore?startIndex=${startIndex}&lastIndex=${lastIndex}`
      );
      return data.data;
    }
  });
};

const useTrendingCollections = (startIndex: number, lastIndex: number) => {
  return useQuery<ITrendingCollectionsSwiperCard[], AxiosError>({
    queryKey: ["trendingCollections", startIndex, lastIndex],
    queryFn: async () => {
      const { data } = await axios.get(
        `/api/collections/trending?startIndex=${startIndex}&lastIndex=${lastIndex}`
      );
      return data.data;
    }
  });
};

const useRecentlyListedCollections = (startIndex: number, lastIndex: number) => {
  return useQuery<Omit<ITrendingCollectionsSwiperCard, "volume">[], AxiosError>({
    queryKey: ["recentlyListedCollections", startIndex, lastIndex],
    queryFn: async () => {
      const { data } = await axios.get(
        `/api/collections/recently-listed?startIndex=${startIndex}&lastIndex=${lastIndex}`
      );
      return data.data;
    },
    keepPreviousData: true
  });
};

// POST QUERIES

const useCreateRecentlyListedCollection = () => {
  return useMutation(
    async (values: Omit<ITrendingCollectionsSwiperCard, "volume">) => {
      const { data } = await axios.post("/api/collections/recently-listed", values);
      return data;
    },
    {
      onError: (error: AxiosError) => {
        return error.response?.data.message;
      }
    }
  );
};

// EXPORT

export const useQueries = () => {
  return {
    GET: {
      collections: {
        explore: useExploreCollections,
        trending: useTrendingCollections,
        recentlyListed: useRecentlyListedCollections
      }
    },
    POST: {
      collections: {
        recentlyListed: useCreateRecentlyListedCollection
      }
    }
  };
};

<template>
  <div
    class="flex flex-col break-words bg-white border border-2 border-gray-400 shadow-md pt-1 px-4"
  >
    <ul>
      <li class="float-left w-1/5 m-1">
        <!-- {{-- 카드 컴포넌트 시작 --}} -->
        <ContentCard>
          <template slot="avatar">
            <div class="flex">
              <avatar
                url="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9
                  &amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              ></avatar>
              <span class="px-2 py-3">김철수</span>
            </div>
          </template>

          <template slot="very-good">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                class="color-red-600"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="#ff0000"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 
                    19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
              <span class="px-2">1,234</span>
            </div>
          </template>
        </ContentCard>
        <!-- {{-- 카드 컴포넌트 끝 --}} -->
      </li>

      <li class="float-left w-1/5 mt-1">
        <!-- {{-- 카드 컴포넌트 시작 --}} -->
        <ContentCard>
          <template slot="avatar">
            <div class="flex">
              <avatar
                url="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9
                  &amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              ></avatar>
              <span class="px-2 py-3">김철수</span>
            </div>
          </template>

          <template slot="very-good">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                class="color-red-600"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="#ff0000"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 
                    19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
              <span class="px-2">1,234</span>
            </div>
          </template>
        </ContentCard>
        <!-- {{-- 카드 컴포넌트 끝 --}} -->
      </li>
      <li class="float-left w-1/5 mt-1">
        <!-- {{-- 카드 컴포넌트 시작 --}} -->
        <ContentCard>
          <template slot="avatar">
            <div class="flex">
              <avatar
                url="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9
                  &amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              ></avatar>
              <span class="px-2 py-3">김철수</span>
            </div>
          </template>

          <template slot="very-good">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                class="color-red-600"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="#ff0000"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 
                    19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
              <span class="px-2">1,234</span>
            </div>
          </template>
        </ContentCard>
        <!-- {{-- 카드 컴포넌트 끝 --}} -->
      </li>
      <li class="float-left w-1/5 mt-1">
        <!-- {{-- 카드 컴포넌트 시작 --}} -->
        <ContentCard>
          <template slot="avatar">
            <div class="flex">
              <avatar
                url="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9
                  &amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              ></avatar>
              <span class="px-2 py-3">김철수</span>
            </div>
          </template>

          <template slot="very-good">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                class="color-red-600"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="#ff0000"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 
                    19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
              <span class="px-2">1,234</span>
            </div>
          </template>
        </ContentCard>
        <!-- {{-- 카드 컴포넌트 끝 --}} -->
      </li>
      <li class="float-left w-1/5 mt-1">
        <!-- {{-- 카드 컴포넌트 시작 --}} -->
        <ContentCard>
          <template slot="avatar">
            <div class="flex">
              <avatar
                url="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9
                  &amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              ></avatar>
              <span class="px-2 py-3">김철수</span>
            </div>
          </template>

          <template slot="very-good">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                class="color-red-600"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="#ff0000"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 
                    19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
              <span class="px-2">1,234</span>
            </div>
          </template>
        </ContentCard>
        <!-- {{-- 카드 컴포넌트 끝 --}} -->
      </li>
      <li class="float-left w-1/5 mt-1">
        <!-- {{-- 카드 컴포넌트 시작 --}} -->
        <ContentCard>
          <template slot="avatar">
            <div class="flex">
              <avatar
                url="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9
                  &amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              ></avatar>
              <span class="px-2 py-3">김철수</span>
            </div>
          </template>

          <template slot="very-good">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                class="color-red-600"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="#ff0000"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 
                    19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
              <span class="px-2">1,234</span>
            </div>
          </template>
        </ContentCard>
        <!-- {{-- 카드 컴포넌트 끝 --}} -->
      </li>
      <li class="float-left w-1/5 mt-1">
        <!-- {{-- 카드 컴포넌트 시작 --}} -->
        <ContentCard>
          <template slot="avatar">
            <div class="flex">
              <avatar
                url="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9
                  &amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              ></avatar>
              <span class="px-2 py-3">김철수</span>
            </div>
          </template>

          <template slot="very-good">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                class="color-red-600"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="#ff0000"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 
                    19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
              <span class="px-2">1,234</span>
            </div>
          </template>
        </ContentCard>
        <!-- {{-- 카드 컴포넌트 끝 --}} -->
      </li>
      <li class="float-left w-1/5 mt-1">
        <!-- {{-- 카드 컴포넌트 시작 --}} -->
        <ContentCard>
          <template slot="avatar">
            <div class="flex">
              <avatar
                url="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9
                  &amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              ></avatar>
              <span class="px-2 py-3">김철수</span>
            </div>
          </template>

          <template slot="very-good">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                class="color-red-600"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="#ff0000"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 
                    19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
              <span class="px-2">1,234</span>
            </div>
          </template>
        </ContentCard>
        <!-- {{-- 카드 컴포넌트 끝 --}} -->
      </li>
      <li class="float-left w-1/5 mt-1">
        <!-- {{-- 카드 컴포넌트 시작 --}} -->
        <ContentCard>
          <template slot="avatar">
            <div class="flex">
              <avatar
                url="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9
                  &amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              ></avatar>
              <span class="px-2 py-3">김철수</span>
            </div>
          </template>

          <template slot="very-good">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                class="color-red-600"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="#ff0000"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 
                    19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
              <span class="px-2">1,234</span>
            </div>
          </template>
        </ContentCard>
        <!-- {{-- 카드 컴포넌트 끝 --}} -->
      </li>
      <li class="float-left w-1/5 mt-1">
        <!-- {{-- 카드 컴포넌트 시작 --}} -->
        <ContentCard>
          <template slot="avatar">
            <div class="flex">
              <avatar
                url="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9
                  &amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              ></avatar>
              <span class="px-2 py-3">김철수</span>
            </div>
          </template>

          <template slot="very-good">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                class="color-red-600"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="#ff0000"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 
                    19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
              <span class="px-2">1,234</span>
            </div>
          </template>
        </ContentCard>
        <!-- {{-- 카드 컴포넌트 끝 --}} -->
      </li>
      <li class="float-left w-1/5 mt-1">
        <!-- {{-- 카드 컴포넌트 시작 --}} -->
        <ContentCard>
          <template slot="avatar">
            <div class="flex">
              <avatar
                url="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9
                  &amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              ></avatar>
              <span class="px-2 py-3">김철수</span>
            </div>
          </template>

          <template slot="very-good">
            <div class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                class="color-red-600"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="#ff0000"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 
                    19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
              <span class="px-2">1,234</span>
            </div>
          </template>
        </ContentCard>
        <!-- {{-- 카드 컴포넌트 끝 --}} -->
      </li>
    </ul>
  </div>
</template>

<script>
import ContentCard from '../components/ContentCard';
import avatar from '../components/Avatar';

export default {
  components: {
    ContentCard,
    avatar,
  },
};
</script>

<style>
</style>
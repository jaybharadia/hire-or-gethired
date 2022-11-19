<template>
  <div class="flex flex-col md:flex-row gap-8">
    <TheCard
      title="Application Tracking System"
      :img="$options.applicationTrackingSystem"
    />
    <TheCard title="Reports & Analytics" :img="$options.dataIllustrationImg" />
    <TheCard
      title="Immediate Candidate Screening"
      :img="$options.scanningCandidate"
    />
    <TheCard title="Data Privacy" :img="$options.privacyImg" />
  </div>
</template>

<script>
import TheCard from "@/components/TheCard.vue";
import privacyImg from "@/assets/images/privacy.jpg";
import applicationTrackingSystem from "@/assets/images/application-tracking-system.jpg";
import dataIllustrationImg from "@/assets/images/data-illustration.jpg";
import scanningCandidate from "@/assets/images/scanning-candidate.jpg";

export default {
  applicationTrackingSystem,
  privacyImg,
  dataIllustrationImg,
  scanningCandidate,
  components: {
    TheCard,
  },
};
</script>

<style lang="scss" scoped></style>

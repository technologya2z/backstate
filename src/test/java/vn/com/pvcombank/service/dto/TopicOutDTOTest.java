package vn.com.pvcombank.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import vn.com.pvcombank.web.rest.TestUtil;

class TopicOutDTOTest {

    @Test
    void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(TopicOutDTO.class);
        TopicOutDTO topicOutDTO1 = new TopicOutDTO();
        topicOutDTO1.setId(1L);
        TopicOutDTO topicOutDTO2 = new TopicOutDTO();
        assertThat(topicOutDTO1).isNotEqualTo(topicOutDTO2);
        topicOutDTO2.setId(topicOutDTO1.getId());
        assertThat(topicOutDTO1).isEqualTo(topicOutDTO2);
        topicOutDTO2.setId(2L);
        assertThat(topicOutDTO1).isNotEqualTo(topicOutDTO2);
        topicOutDTO1.setId(null);
        assertThat(topicOutDTO1).isNotEqualTo(topicOutDTO2);
    }
}

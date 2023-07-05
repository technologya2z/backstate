package vn.com.pvcombank.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import vn.com.pvcombank.web.rest.TestUtil;

class TopicInDTOTest {

    @Test
    void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(TopicInDTO.class);
        TopicInDTO topicInDTO1 = new TopicInDTO();
        topicInDTO1.setId(1L);
        TopicInDTO topicInDTO2 = new TopicInDTO();
        assertThat(topicInDTO1).isNotEqualTo(topicInDTO2);
        topicInDTO2.setId(topicInDTO1.getId());
        assertThat(topicInDTO1).isEqualTo(topicInDTO2);
        topicInDTO2.setId(2L);
        assertThat(topicInDTO1).isNotEqualTo(topicInDTO2);
        topicInDTO1.setId(null);
        assertThat(topicInDTO1).isNotEqualTo(topicInDTO2);
    }
}
